$(() => {
    let refresh = async () => {
        $("#pets tbody").empty()
        let pets = await api.get("pets")
        pets.forEach(p => $("#pets tbody").append(`<tr><td>${p.name}</td><td>${p.age||"N/A"}</td><td>${p.breed||"N/A"}</td></tr>`))
    }

    refresh();

    $("#newbtn").click(async () => {
        await api.post("pets", {name: $("#name").val(), age: parseInt($("#age").val()), breed: $("#breed").val(),})
        refresh();
    })
})