'use client'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, DatePicker, Textarea, DateRangePicker } from "@nextui-org/react";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { tipoIncidencias } from '../../data/data'
import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

export default function ButtonModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [tipoDeIncidencia, setTipoDeIncidencia] = useState<number | undefined>(undefined);
    const [comentarios, setComentarios] = useState('');
    const [fotoEvidencia, setFotoEvidencia] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [dateRange, setDateRange] = useState({ start: null, end: null });
    const [date, setDate] = useState('');

    const handleSignIn = () => {

        console.log({ comentarios: comentarios, archivo: file, tipoDeIncidencia: tipoDeIncidencia, dateRange, date });

        setTipoDeIncidencia(undefined)
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleValuesOnClose = () => {
        setTipoDeIncidencia(undefined);
        setComentarios('');
        setFotoEvidencia('');
        setFile(null);
    }

    const handleDateRangeChange = (range: any) => {
        if (range) {
            setDateRange(range); 
        }
    };

    const handleDateChange = (date: any) => {
        if (date) {
            setDate(date.toLocaleString());
        }
    }
    return (
        <>
            <Button onPress={onOpen} color="primary">Nueva Incidencia</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={() => { handleValuesOnClose(); onOpenChange(); }}
                placement="top-center"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear incidencia</ModalHeader>
                            <ModalBody>
                                <Select
                                    items={tipoIncidencias}
                                    label="Tipo de incidencia"
                                    labelPlacement="outside"
                                    placeholder="Selecciona un tipo de incidencia"
                                    className="max-w-xs"
                                    value={tipoDeIncidencia}
                                    onChange={(e) => setTipoDeIncidencia(Number(e.target.value))}
                                >
                                    {(incidencia) => <SelectItem key={incidencia.key}>{incidencia.label}</SelectItem>}
                                </Select>
                                {
                                    tipoDeIncidencia !== undefined ?
                                        tipoDeIncidencia === 1 ?
                                            // <RangeCalendar
                                            //     aria-label="Date (Min Date Value)"
                                            //     minValue={today(getLocalTimeZone())}
                                            // />
                                            <DateRangePicker
                                                label="Selecciona fechas"
                                                className="max-w-xs"
                                                labelPlacement="outside"
                                                onChange={handleDateRangeChange}
                                            />
                                            :
                                            <DatePicker
                                                label="Selecciona fecha"
                                                className="max-w-[284px]"
                                                labelPlacement="outside"
                                                onChange={handleDateChange}
                                            />
                                        :
                                        <></>
                                }

                                <Input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf, .jpg, .jpeg, .png" // Permitir solo ciertos tipos de archivos
                                    label="Subir archivo"
                                    labelPlacement="inside"
                                />

                                <Textarea
                                    label="Comentarios"
                                    placeholder="Escribe tus comentarios aquí..."
                                    value={comentarios}
                                    onChange={(e) => setComentarios(e.target.value)}
                                    minRows={6} // Puedes ajustar el número mínimo de filas
                                    labelPlacement="outside"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button color="primary" onPress={() => { handleSignIn(); onClose(); }}>
                                    Crear
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}