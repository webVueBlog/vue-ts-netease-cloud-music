仅限 TS
ban-ts-ignore - 禁止使用“// @ts-ignore”评论。
仅限 TS
ban-types - 禁止使用特定类型。不禁止使用相应的运行时对象。
仅限 TS
有固定器
member-access - 需要对类成员进行明确的可见性声明。
有固定器
member-ordering - 强制执行成员排序。
仅限 TS
no-any - 禁止使用 ofany作为类型声明。
仅限 TS
no-empty-interface - 禁止空接口。
no-for-in - 禁止使用 for...in 语句。
no-import-side-effect - 避免有副作用的 import 语句。
仅限 TS
有固定器
no-inferrable-types - 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。
仅限 TS
有固定器
no-internal-module - 不允许内部module
no-magic-numbers - 不允许在变量赋值之外使用常量数值。如果未指定允许值列表，则默认允许 -1、0 和 1。
仅限 TS
no-namespace - 不允许使用 internal modules 和namespaces。
仅限 TS
no-non-null-assertion - 禁止使用!后缀运算符的非空断言。
no-parameter-reassignment - 不允许重新分配参数。
no-reference - 禁止/// `<reference path=>导入（改用 ES6 样式的导入）`。
仅限 TS
有固定器
需要类型信息
no-unnecessary-type-assertion - 如果类型断言没有改变表达式的类型，则发出警告。
仅限 TS
no-var-requires - 除了在 import 语句中之外，不允许使用 require 语句。
only-arrow-functions - 禁止传统（非箭头）函数表达式。
prefer-for-of - 如果索引仅用于访问被迭代的数组，则建议在标准“for”循环上使用“for-of”循环。
需要类型信息
promise-function-async - 要求将任何返回 promise 的函数或方法标记为异步。
仅限 TS
typedef - 需要存在类型定义。
仅限 TS
需要类型信息
await-promise - 对不是 Promise 的等待值发出警告。
ban-comma-operator - 禁止使用逗号运算符。
ban - 禁止使用特定函数或全局方法。
有固定器
curlyif - 为/ for/ do/while语句 强制使用大括号。
forin - 要求使用for ... in语句过滤if语句。
function-constructor - 防止使用内置的 Function 构造函数。
import-blacklist - 禁止通过importand导入指定模块require，或导入指定模块的特定命名导出，或使用匹配指定正则表达式模式的导入。
label-position - 仅允许在合理位置添加标签。
no-arg - 不允许使用arguments.callee.
no-async-without-await - 标记为 async 的函数必须包含 await 或 return 语句。
no-bitwise - 禁止按位运算符。
no-conditional-assignment - 禁止在条件句中进行任何类型的赋值。
no-console - 禁止使用指定的console方法。
no-construct - 禁止访问 、 和 的String构造Number函数Boolean。
no-debugger - 禁止debugger语句。
no-duplicate-super - 如果 'super()' 在构造函数中出现两次，则发出警告。
no-duplicate-switch-case - 防止在 switch 语句中出现重复的情况。
no-duplicate-variable - 不允许在同一块范围内重复变量声明。
no-dynamic-delete - 禁止使用带有计算键表达式的删除运算符。
no-empty - 不允许空块。
no-eval - 不允许eval函数调用。
仅限 TS
需要类型信息
no-floating-promises - 必须适当处理函数返回的承诺。
需要类型信息
no-for-in-array - 禁止使用 for-in 循环遍历数组。
no-implicit-dependencies - 不允许导入在项目的 package.json 中未列为依赖项的模块
仅限 TS
需要类型信息
no-inferred-empty-object-type - 禁止在函数和构造函数调用站点对 {}（空对象类型）进行类型推断
no-invalid-template-strings${ -在非模板字符串中 使用时发出警告。
no-invalid-this - 禁止在this类之外使用关键字。
仅限 TS
no-misused-new - 警告明显尝试为接口或new类定义构造函数。
有固定器
no-null-keyword - 禁止使用null关键字文字。
仅限 TS
需要类型信息
no-null-undefined-union - 不允许显式声明或隐式返回的联合类型同时使用null和 undefined作为成员。
仅限 TS
no-object-literal-type-assertion - 禁止对象文字出现在类型断言表达式中。仍然允许 转换为any或转换为。unknown
仅限 TS
需要类型信息
no-promise-as-boolean - 警告用于布尔条件的 Promise。
需要类型信息
no-restricted-globals - 禁止特定的全局变量。
有固定器
no-return-await - 不允许不必要的return await.
no-shadowed-variable - 不允许隐藏变量声明。
no-sparse-arrays - 禁止数组字面量包含缺失的元素。
有固定器
no-string-literal - 禁止不必要的字符串文字属性访问。允许obj["prop-erty"]（不能是常规属性访问）。不允许obj["property"]（应该obj.property）。
有固定器
no-string-throw - 抛出普通字符串或字符串连接的标志。
no-submodule-imports - 不允许导入任何子模块。
no-switch-case-fall-through - 不允许通过 case 语句。
no-tautology-expression - 强制关系/相等二元运算符不将两个相等的变量/文字作为操作数。像 3 === 3, someVar === someVar, “1” > “1” 这样的表达式要么是重言式，要么是矛盾的，会产生错误。
no-this-assignment - 禁止对this.
仅限 TS
需要类型信息
no-unbound-method - 在方法调用之外使用方法时发出警告。
no-unnecessary-class - 禁止非严格必要的类。
仅限 TS
需要类型信息
no-unsafe-any - 以动态方式使用 'any' 类型的表达式时发出警告。仅在适用于 时才允许使用{} | null | undefined。向未知方向低头总是安全的。允许进行类型转换和测试。"" + x允许使用 适用于所有值的表达式（例如）。
no-unsafe-finally - 禁止在 finally 块中使用 控制流语句， 例如return,和。continuebreakthrows
no-unused-expression - 禁止未使用的表达式语句。
仅限 TS
有固定器
需要类型信息
no-unused-variable - 禁止未使用的导入、变量、函数和私有类成员。类似于 tsc 的 –noUnusedParameters 和 –noUnusedLocals 选项，但不会中断代码编译。
需要类型信息
no-use-before-declare - 禁止在声明之前使用变量。
有固定器
no-var-keyword - 禁止使用var关键字。
需要类型信息
no-void-expression - 要求类型的表达式void出现在语句位置。
prefer-conditional-expression - 建议使用条件表达式，而不是在 if 语句的每个分支中分配相同的东西。
有固定器
prefer-object-spread - 在适当的地方强制使用 ES2018 对象扩展运算符Object.assign()。
radix - 调用时需要指定 radix 参数parseInt。
需要类型信息
限制加操作数- 添加两个变量时，操作数必须都是数字类型或字符串类型。
有固定器
static-this - 禁止使用thisin 静态方法。
仅限 TS
需要类型信息
strict-boolean-expressions - 限制布尔表达式中允许的类型。默认情况下只允许布尔值。检查以下节点：
!,&&和||运算符的参数
条件表达式 ( cond ? x : y)中的条件
if, for,while和do-while语句的条件。
需要类型信息
strict-comparisons - 只允许原语之间的比较。
仅限 TS
有固定器
需要类型信息
strict-string-expressions - 禁用隐式 toString() 调用
仅限 TS
需要类型信息
strict-type-predicates - 对始终为真或始终为假的类型谓词发出警告。适用于 'typeof' 与常量的比较（例如 'typeof foo === “string”'），以及与 'null'/'undefined' 的相等比较。（TypeScript 不会让你比较 '1 === 2'，但它有一个例外 '1 === undefined'。） 还不适用于 'instanceof'。不会对 'if (xy)' 发出警告，其中 ' x.y ' 总是真实的。为此，请参阅严格布尔表达式。此规则需要strictNullChecks正常工作。
switch-default - 在所有语句 中都需要一个default大小写。switch
三等号- 需要===and!==代替==and !=。
typeof-compare - 确保结果typeof与正确的字符串值进行比较
不必要的构造函数- 防止空白构造函数，因为它们是多余的。
仅限 TS
需要类型信息
use-default-type-parameter - 如果显式指定的类型参数是该类型参数的默认值，则发出警告。
use-isnan - 强制使用该isNaN()函数来检查 NaN 引用，而不是与NaN常量进行比较。
需要类型信息
deprecation - 使用已弃用的 API 时发出警告。
仅限 TS
invalid-void - 禁止使用void泛型或返回类型之外的类型。如果void用作返回类型，它不应该是交集/联合类型的一部分。
max-classes-per-file - 一个文件不能包含超过指定数量的类
max-file-line-count - 要求文件保持在一定数量的行以下
no-default-export - 禁止 ES6 样式模块中的默认导出。
no-default-import - 禁止从某些 ES6 风格的模块中导入默认成员。
no-duplicate-imports - 不允许来自同一模块的多个导入语句。
仅限 TS
no-mergeable-namespace - 不允许在同一个文件中合并命名空间。
no-require-imports - 不允许调用require().
object-literal-sort-keys - 检查对象文字中键的顺序。使用默认字母顺序时，可以使用额外的空白行将对象属性组合在一起，同时保持每个组中的元素按字母顺序排列。要退出此使用 ignore-blank-lines 选项。
有固定器
prefer-const -如果可能 的话，要求使用变量声明const代替。letvar
仅限 TS
需要类型信息
prefer-readonly - 要求将私有变量标记为readonly好像它们从未在构造函数之外修改过。

有固定器
arrow-return-shorthand - 建议转换() => { return x; }为() => x.
binary-expression-operand-order - 在二进制表达式中，如果可能，文字应始终位于右侧。例如，首选“x + 1”而不是“1 + x”。
仅限 TS
有固定器
callable-types - 只有调用签名的接口或文字类型可以写成函数类型。
class-name - 强制使用 PascalCased 类和接口名称。
有固定器
注释格式- 对单行注释强制执行格式规则。
评论类型- 允许一组有限的评论类型
completed-docs - 强制填写重要项目的 JSDoc 注释。
encoding - 强制执行 UTF-8 文件编码。
有固定器
file-header - 对所有文件强制使用特定的标题注释，由正则表达式匹配。
文件名大小写- 强制执行一致的文件命名约定
increment-decrement - 使用显式 += 1 或 -= 1 运算符强制执行。
仅限 TS
interface-name - 要求接口名称以大写“I”开头
仅限 TS
有固定器
interface-over-type-literal - 优先使用接口声明而不是类型文字 ( type T = { ... })
仅限 TS
需要类型信息
match-default-export-name - 要求默认导入与其导入的声明具有相同的名称。对匿名默认导出没有任何作用。
newline-per-chained-call - 要求将链接的方法调用分成单独的行。
仅限 TS
有固定器
no-angle-bracket-type-assertion - 需要使用as Typefor 类型断言而不是<Type>.
仅限 TS
有固定器
需要类型信息
no-boolean-literal-compare - 与布尔文字比较时发出警告，如x === true.
仅限 TS
no-parameter-properties - 不允许在类构造函数中使用参数属性。
仅限 TS
no-redundant-jsdoc - 禁止复制 TypeScript 功能的 JSDoc。
仅限 TS
no-reference-import -无论如何 都不要<reference types="foo" />导入。foo
no-unnecessary-callback-wrapper - 替换x => f(x)为f. 要捕获更多案例，请启用only-arrow-functions等arrow-return-shorthand。
有固定器
no-unnecessary-initializer - 禁止将“var”/“let”语句或解构初始化程序初始化为“未定义”。
仅限 TS
有固定器
需要类型信息
no-unnecessary-qualifier - 不需要命名空间限定符 ( ) 时发出警告A.x。
有固定器
object-literal-key-quotes - 强制执行一致的对象文字属性引用样式。
有固定器
object-literal-shorthand - 强制/禁止使用 ES6 对象文字速记。
有固定器
one-line - 要求指定的标记与它们前面的表达式位于同一行。
one-variable-per-declaration - 不允许在同一声明语句中定义多个变量。
有固定器
ordered-imports - 要求导入语句按字母顺序排列和分组。
prefer-function-over-method - 警告不使用“this”的类方法。
有固定器
prefer-method-signature - 优先foo(): void于foo: () => void接口和类型。
prefer-switch - 首选switch语句而不是if具有简单===比较的语句。
首选模板- 首选模板表达式而不是字符串文字连接。
有固定器
prefer-while - 首选while循环而不是for没有初始化器和增量器的循环。
需要类型信息
return-undefined - 首选return;void 函数和return undefined;返回值的函数。
有固定器
space-before-function-paren - 函数括号前要求或不允许有空格
有固定器
space-within-parens - 在括号内强制使用空格或禁止它们。始终允许使用空括号 ()。
有固定器
switch-final-break - 检查 switch 语句的最后一个子句是否以break;.
仅限 TS
有固定器
type-literal-delimiter - 检查类型文字成员是否由分号分隔。对多行类型文字强制使用尾随分号。

##

有固定器
align - 强制垂直对齐。
有固定器
arrow-parens - 需要在箭头函数定义的参数周围加上括号。
有固定器
eofline - 确保文件以换行符结尾。
import-spacing - 确保 import 语句关键字之间的适当间距
有固定器
indent - 使用制表符或空格强制缩进。
jsdoc-format - 强制执行 JSDoc 注释的基本格式规则。
有固定器
linebreak-style - 强制使用一致的换行样式。
max-line-length - 要求行小于某个最大长度。
有固定器
newline-before-return - 当不是块中的唯一行时，在返回之前强制执行空白行。
new-parensnew - 通过关键字 调用构造函数时需要括号。
有固定器
no-consecutive-blank-lines - 不允许连续出现一个或多个空行。
有固定器
no-irregular-whitespace - 禁止文件中的不规则空格，包括字符串和注释。
有固定器
no-trailing-whitespace - 不允许在行尾出现尾随空格。
有固定器
number-literal-format - 检查十进制文字是否应以“0”开头。而不仅仅是 '.'，并且不应以尾随 '0' 结尾。
有固定器
quotemark - 对字符串文字强制使用引号字符。
有固定器
分号- 在每条语句的末尾强制使用一致的分号。
有固定器
trailing-comma - 要求或不允许在数组和对象字面量、解构赋值、函数类型、命名导入和导出以及函数参数中使用尾随逗号。
仅限 TS
有固定器
typedef-whitespace - 类型定义需要或不允许使用空格。
有固定器
whitespace - 强制执行空白样式约定。