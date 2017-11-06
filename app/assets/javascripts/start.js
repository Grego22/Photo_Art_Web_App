require 'babel/transpiler'

Babel::Transpiler.transform File.read("foo.es6")
