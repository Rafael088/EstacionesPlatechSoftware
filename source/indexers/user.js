indexUser = [
    {
        method  : "post",
        service : "Cuser",
        middleware: "token"
    },
    {
        method  : "get",
        service : "Ruser"
    },
    {
        method  : "patch",
        service : "Uuser"
    },
    {
        method  : "delete",
        service : "Duser"
    }
]

module.exports = indexUser