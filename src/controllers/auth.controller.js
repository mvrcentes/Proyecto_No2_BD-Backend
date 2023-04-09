import supabase from "../database.js"

const auth = {}

auth.signUp = async (req, res) => {
    const { data, error } = await supabase.auth.signUp({
        email: req.body.email,
        password: req.body.password,
        options: {
            emailRedirectTo: "ww.google.com",
        },
    })
    console.log(data)
    console.log(error)
    return res.json({ message: "Usuario creado correctamente" })
}

auth.signIn = async (req, res) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: req.body.email,
            password: req.body.password,
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

auth.isActive = async (req, res) => {
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (user) {
        console.log(user.session)
        return res.json({ message: "Usuario activo" })
    }
    return res.json({ message: "Usuario no activo" })
}

export default auth
