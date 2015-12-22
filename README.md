## gulp-typescript & gulp-sourcemaps

This repository has two gulp commands

```gulp works```
and
```gulp doesntwork```

The command "works" compiles .ts files all in teh same folder and creates a source map for those files.
The source map is created correctly and the "sourcesContent" field contains the .ts files contents.

The command "doesntwork" compiles .ts files in seperate folders and also creates a source map.
The source map is created but the "sourcesContent" field is always null.

In both commands I'm being quite specific about which .ts files to compile because my use case is for them to be compiled in a certain order (I know about the `sortOutput` option but sometimes that feature can't be used e.g Angular - where the module file should be outputed before service files which should be outputed before the controller files etc. but where no file needs to reference any other file)
