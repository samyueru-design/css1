
// GESTIÓN DE ACTIVIDADES ICA

console.log("Sistema ICA iniciado correctamente");

// ELEMENTOS DEL FORMULARIO

const eventForm = document.getElementById("eventForm");

const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventId = document.getElementById("eventId");

console.log("Formulario conectado correctamente");

// REGISTRAR Y EDITAR ACTIVIDADES

eventForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const id = eventId.value;

    const nuevaActividad = {
        id: id || crypto.randomUUID(),
        name: eventName.value.trim(),
        date: eventDate.value,
        time: eventTime.value,
        category: eventCategory.value,
        description: eventDescription.value.trim()
    };

    // VALIDAR CAMPOS OBLIGATORIOS

    if (!nuevaActividad.name ||
        !nuevaActividad.date ||
        !nuevaActividad.time) {

        alert("Completa los campos obligatorios");
        return;
    }

    // ACTUALIZAR O CREAR ACTIVIDAD

    if (id) {

        events = events.map(function(evento) {
            return evento.id === id ? nuevaActividad : evento;
        });

    } else {

        events.push(nuevaActividad);

    }

    saveEvents();
    refresh();
    closeModal();

    alert(id
        ? "Actividad actualizada correctamente"
        : "Actividad registrada correctamente"
    );

});

// ELIMINAR ACTIVIDADES

function deleteEvent() {

    const id = eventId.value;

    if (!id) return;

    if (confirm("¿Estás seguro de eliminar este evento?")) {

        events = events.filter(function(evento) {
            return evento.id !== id;
        });

        saveEvents();
        refresh();
        closeModal();
    }
}


