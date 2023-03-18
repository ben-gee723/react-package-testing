import useMyContext from "@ben-gee723/use-context-hook";

const [ AppContext, AppStore ] = useMyContext({
    name: "app",
    init: {
        count: 0,
        form: {
            name: "",
            email: "",
            password: "",
            isLogin: null
        },
        data: []
    },
    
    functions: {
        increase: (state, setState) => setState({...state, count: state.count + 1}),
        decrease: (state, setState) => setState({...state, count: state.count - 1}),

        onInputChange: (state, setState, {target}) => setState(
            {...state, form: {...state.form, [target.name]: target.value}}
        ),
        submit: (state, e) => console.log("form submitted", state.form),
        getData: async (state, setState) => {
            const res = await fetch(url);
            const data = await res.json();
            setState({...state, data: data});
        }
    }
})

export { AppContext, AppStore };