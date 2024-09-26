import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useState } from "react";
import IncidenciaSelect from '../SelectData/IncidenciaSelect';
import IncidenciaDatePicker from '../SelectData/IncidenciaDatePicker';

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [tipoDeIncidencia, setTipoDeIncidencia] = useState<number | undefined>(undefined);

  const handleSignIn = () => {
    // Maneja el envío de datos aquí
    console.log({ tipoDeIncidencia });
  };

  return (
    // <ModalContent>
    //   <ModalHeader className="flex flex-col gap-1">Crear incidencia</ModalHeader>
    //   <ModalBody>
    //     <IncidenciaSelect tipoDeIncidencia={tipoDeIncidencia} setTipoDeIncidencia={setTipoDeIncidencia} />
    //     <IncidenciaDatePicker tipoDeIncidencia={tipoDeIncidencia} />
    //   </ModalBody>
    //   <ModalFooter>
    //     <Button color="danger" variant="flat" onPress={onClose}>
    //       Close
    //     </Button>
    //     <Button color="primary" onPress={() => { handleSignIn(); onClose(); }}>
    //       Sign in
    //     </Button>
    //   </ModalFooter>
    // </ModalContent>
    <ModalContent>
    <ModalHeader>Crear incidencia</ModalHeader>
    <ModalBody>
      <p>Contenido de prueba</p>
    </ModalBody>
    <ModalFooter>
      <Button color="danger" variant="flat" onPress={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
  );
};

export default ModalForm;
