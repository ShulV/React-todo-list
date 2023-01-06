# React-todo-list
## Как создать начальный шаблон приложения?
1) создать react-приложение
npx create-react-app todolist
2) перейти из папки репозитория в папку приложения
cd todolist
3) запустить react приложение
npm start
## Краткая теория по react
1) хук UseState
    Хранит в себе состояние компонента. Грубо говоря, аналог базы данных.

    const [someVariable, setSomeVariable] = user state([{id: 1, title: 'some title 1'}, {}, {}])

    где someVariable - переменная, в которой хранится состояние, а 
    setSomeVariable - функция, которая будет изменять состояние переменной.

    их мы можем передавать в компоненты вот так:
    <someComponent someVariable={someVariable} setSomeVariable={setSomeVariable}>

    принимать через параметры компонента вот так:
    function someComponent({someVariable, setSomeVariable}) {
        return (
            <div>
                {
                    todo.map(item -> (
                        <div>{item.someProp}</div>
                    ))
                }
            </div>
        )
    }