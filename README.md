# REGEX JAVASCRIPT

## INFORMAÇÕES IMPORTANTES SOBRE REGEX

**Curso Udemy**

**Regular Expressions são Objetos no JavaScript**
**Todos os exercícios RegEx foram resolvidos com JavaScript**

---

## **Depois de construir seu regex, você pode usar:**

1. Métodos do **Construtor** de Expressão Regular/Regular Expression Constructor `let regex1 = new RegExp("(\w+)(\w+)", "i")`

- `regex1.test("lorem ...");` // true se tiver match
- `regex1.exec("lorem ...")` // array com dados do match
- `regex1.toString("lorem ...")`

2. Métodos do **String** Object Wrapper
- `"lorem ...".match(regex1)` // array com dados do match
- `"lorem ...".search(regex1)` // retorna index do 1º caractere do 1º match
- `"lorem ...".replace(regex1, "$2 $1")` // trocar o valor do match pelo que vc quer, $2 $1 é valores capturados de grupos do regex ()
- `"lorem ...".split(regex1);` // string to array
- matchAll

---

1 - Create basic regular expressions for matching data.
2 - Make use of all the JavaScript methods that accept regular expressions.
3 - Understand the differences between the varied JavaScript methods used with regular expressions.
4 - Test regular expressions before deploying them in your code.
5 - Understand regular expression syntax.
6 - Define more complex patterns using regular expressions.
7 - Use metacharacters and characters sets in defining patterns.
8 - Take advantage of repetition and grouping.
9 - Use anchored expressions and lookahead assertions correctly.
10 - Include unicode when necessary.
11 - Solve common regular expression problems in JavaScript.
