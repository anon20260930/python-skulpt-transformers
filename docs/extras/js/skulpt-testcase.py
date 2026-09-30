import unittest    
import document # pyright: ignore

# Custom TestCase class for the python_code iframe to broadcast results back to the parent window for grading
class TestCase(unittest.TestCase):

    def __init__(self):
        super().__init__()
        self.feedback = []

    # Had to override fail to avoid print.
    # https://github.com/skulpt/skulpt/blob/master/src/lib/unittest/__init__.py#L275
    def appendResult(self,res,actual,expected,feedback):
        if res:
            msg = 'Pass'
            self.assertPassed += 1
        else:
            msg = 'Fail: ' +  feedback            
            self.assertFailed += 1
            

    def main(self):
        # Use these symbols instead of text
        PASS_SYMBOL = "✔"  # Green
        FAIL_SYMBOL = "✘"  # Red
        EXC_SYMBOL  = "⚠"  # Yellow

        for func in self.tlist:            
            self.feedback.append("Running %s: " % self.cleanName(func))
            try:
                self.setUp()
                self.assertPassed = 0
                self.assertFailed = 0
                func()
                self.tearDown()
                # Green checkmark for pass, red X for fail, and yellow ! for exception
                if self.assertFailed == 0:
                    self.numPassed += 1    
                    self.feedback.append(f'<span style="color: #00FF00;">{PASS_SYMBOL}&nbsp;&nbsp;&nbsp;&nbsp;Tests passed in {self.cleanName(func)}</span>')        
                else:
                    self.numFailed += 1
                    self.feedback.append(f'<span style="color: #FF0000;">{FAIL_SYMBOL}&nbsp;&nbsp;&nbsp;&nbsp;Tests failed in {self.cleanName(func)}</span>')
            except Exception as e:
                self.assertFailed += 1
                self.numFailed += 1
                self.feedback.append(f'<span style="color: #FFFF00;">{EXC_SYMBOL}&nbsp;&nbsp;&nbsp;&nbsp;Test threw exception in {self.cleanName(func)} ({e})</span>')
        
        try:
            total = self.numPassed + self.numFailed
            failed_color = "#FF0000" if self.numFailed > 0 else "#00FF00"
            summary = (
                f'Total: {total}, '
                f'<span style="color: #00FF00;">Passed: {self.numPassed}</span>, '
                f'<span style="color: {failed_color};">Failed: {self.numFailed}</span>'
            )
            self.feedback.append(summary)

            code = document.getElementById('code').innerText
            code = code[:code.find('import unittest')]

            # self.feedback.append("Total: %d, Passed: %d, Failed: %d" % (self.numPassed + self.numFailed, self.numPassed, self.numFailed))
            emitGradingEvent({ 'code': code, 'feedback': '\n'.join(self.feedback), 'total': self.numPassed + self.numFailed, 'passed': self.numPassed, 'failed': self.numFailed }) # pyright: ignore
        except Exception as e:
            print("emitGradingEvent: %s" % e)
