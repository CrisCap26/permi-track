// src/data/data.ts
export const columns = [
    { uid: "id", name: "ID", sortable: true },
    { uid: "name", name: "Name", sortable: true },
    { uid: "tipo", name: "Tipo", sortable: true },
    { uid: "status", name: "Status", sortable: true },
    { uid: "sucursal", name: "Sucursal", sortable: true },
    { uid: "departamento", name: "Departamento", sortable: true },
    { uid: "fecha", name: "Fecha", sortable: true },
    { uid: "jefe", name: "Jefe", sortable: true },
    { uid: "actions", name: "Actions" },
];

export const users = [
    // tu lista de usuarios
];

export const statusOptions = [
    { uid: 'aprobada', name: 'Aprobada' },
    { uid: 'rechazada', name: 'Rechazada' },
    { uid: 'espera', name: 'Espera' },
];

export const tipoIncidencias = [
    {key: 1, label:"Vacaciones"},
    {key: 2, label:"Permiso sin goce"},
    {key: 3, label:"Permiso de llegar tarde"},
    {key: 4, label:"Permiso de salir temprano"},
    {key: 5, label:"Paternidad"},
    {key: 6, label:"Incapacidad"}
];

export const sucursales = [
    {key: 1, label:"Gallo"},
    {key: 2, label:"Peri"},
    {key: 3, label:"Vallejo"},
    {key: 4, label:"Queretaro"},
    {key: 5, label:"Monterrey"},
] 

