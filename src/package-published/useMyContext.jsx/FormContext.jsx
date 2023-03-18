import useMyContext from "@ben-gee723/use-context-hook";

const [ FormContext, formStore ] = useMyContext({
    name: "form",
    init: {
        name: "",
        email: "",
        isLogin: null
    },
    functions: {
        onInputChange: (state, setState, {target}) => setState({...state, [target.name]: target.value}),
        submit: (e, user) => console.log("form submitted"),
    }
})

export { FormContext, formStore };