# safile
Let you decide what special chars you want to encode. Sometimes ugly but effective results, useful for filenames.


# examples
You can see the examples running in the test directory.

EXAMPLE WITH UNWANTED SPECIAL CHARS IN NTFS FILENAMES:

``` 
"a%%b%cd;e:<|>?" becomes: "a%JQ%%JQ%b%JQ%cd%Ow%e%Og%%PA%%fA%%Pg%%Pw%"
"a%JQ%%JQ%b%JQ%cd%Ow%e%Og%%PA%%fA%%Pg%%Pw%" comes back into: "a%%b%cd;e:<|>?"




EXAMPLE WITH UNICODE CHARS (generally accepted in common recent filesystems):

"a%%b%c🌛︎🌝︎☾🌕︎☽︎🌚︎★" becomes: "a%JQ%%JQ%b%JQ%c%8J+Mm++4jg%%8J+MnQ%︎%4pi+%%8J+MlQ%︎%4pi9%︎%8J+Mmu+4jg%%4piF%"
"a%JQ%%JQ%b%JQ%c%8J+Mm++4jg%%8J+MnQ%︎%4pi+%%8J+MlQ%︎%4pi9%︎%8J+Mmu+4jg%%4piF%" comes back into: "a%%b%c🌛︎🌝︎☾🌕︎☽︎🌚︎★"




EXAMPLE SPECIFYING THE ESCAPE CHAR (in such case the underscore):

"a%%b%cd;e:<|>?" becomes: "a_Xw__Xw_b_Xw_cd_Ow_e_Og__PA__fA__Pg__Pw_"
"a_Xw__Xw_b_Xw_cd_Ow_e_Og__PA__fA__Pg__Pw_" comes back into: "a__b_cd;e:<|>?"




REAL LIFE EXAMPLE, WITH FEW CHARS TO BE CHANGED, NOT TOO UGLY (e.g. proposal for nomnoml filenames):

"Drawing|Diagram>1.txt" becomes: "Drawing.fA.Diagram.Pg.1.txt"
"Drawing.fA.Diagram.Pg.1.txt" comes back into: "Drawing|Diagram>1.txt"
```