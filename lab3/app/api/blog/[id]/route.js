export function Get(resquest, { params}) {
    return Response.json({
        name: "Than Ngamsanga",
        major: "IT",
        lv: "3",
        id: params.id
    })
}