while read -r name type1 type2; do
    if [ -n "$type2" ]; then
        target_dir="$type1/$type2"
    else
        target_dir="$type1"
    fi
    
    # Create the directory structure if it doesn't exist
    mkdir -p "$target_dir"
    
    # Append the pokemon's name into names.txt inside that directory
    echo "$name" >> "$target_dir/names.txt"
done < ../pokemon/pokemon_types.txt