#!/bin/bash

declare -A lookup_table
lookup_table["one"]=1
lookup_table["two"]=2
lookup_table["three"]=3
lookup_table["four"]=4
lookup_table["five"]=5
lookup_table["six"]=6
lookup_table["seven"]=7
lookup_table["eight"]=8
lookup_table["nine"]=9

sum=0
while IFS= read -r LINE; do

number=$(echo $LINE | grep -oE -e '[0-9]|one|two|three|four|five|six|seven|eight|nine' | head -n 1)

number2=$(echo $LINE | grep -oE -e '[0-9]|one|two|three|four|five|six|seven|eight|nine' | tail -n 1)

if [[ $number != [0-9] ]]; then
number=${lookup_table["$number"]} 
fi

if [[ $number2 != [0-9] ]]; then
number2=${lookup_table["$number2"]} 
fi

addNumber=${number}${number2}

sum=$((sum + addNumber))

echo $sum

done < input1.txt 

clear
echo "The answer is: $sum"
