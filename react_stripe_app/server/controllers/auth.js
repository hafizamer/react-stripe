export const register=(req, res) => {
    res.json({
        data:"Reached node server controller"
    })
}

export const debug=(req, res) => {
    res.json({
        data: "this is debug mode controller"
    })
}