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

// -----Manual------

export const SignInManual = async (req, res) => {
    const { username, password } = req.body

    console.log(username, password)

    const { data, error } = await supabase
        .from("users")
        .select()
        .eq("username", username)
        .eq("password", password)

    await supabase
        .rpc("set_app_user", { new_user: username })
        .then((response, error) => {
            if (error) {
                console.log("Error:", error)
            } else {
                console.log("Success:", response)
            }
        })

    if (error) return res.json({ error: error.message })

    return res.json(data[0])
}

export const SignUppManual = async (req, res) => {
    const { username, password } = req.params

    const { data, error } = await supabase
        .from("users")
        .select()

        .eq("username", username)
        .eq("password", password)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

// export default auth
