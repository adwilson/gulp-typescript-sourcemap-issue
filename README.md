## gulp-typescript & gulp-sourcemaps

This repository has two gulp commands

```gulp works```
and
```gulp doesntwork```

The command "works" compiles the typescript and creates a source map for .ts files in the same folder. 
The source map is created correctly and the "sourcesContent" field contains the .ts files contents.

The command "doesntwork" compiles the typescript and creates a source map for two files spread over two
folders. A source map is created but the "sourcesContent" field is always null.
