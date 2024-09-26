import { Select, SelectItem } from "@nextui-org/react";
import { tipoIncidencias } from '../../data/data';

interface IncidenciaSelectProps {
  tipoDeIncidencia: number | undefined;
  setTipoDeIncidencia: (value: number | undefined) => void;
}

const IncidenciaSelect: React.FC<IncidenciaSelectProps> = ({ tipoDeIncidencia, setTipoDeIncidencia }) => (
  <Select
    items={tipoIncidencias}
    label="Tipo de incidencia"
    placeholder="Selecciona un tipo de incidencia"
    className="max-w-xs"
    value={tipoDeIncidencia}
    onChange={(e) => setTipoDeIncidencia(Number(e.target.value))}
  >
    {(incidencia) => <SelectItem key={incidencia.key}>{incidencia.label}</SelectItem>}
  </Select>
);

export default IncidenciaSelect;
