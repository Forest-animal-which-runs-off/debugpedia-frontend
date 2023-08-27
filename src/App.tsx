import { Button, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import TechsInput from './components/TechsInput';

export type Debug = {
  techs: string[];
};

function App() {
  const [isEdit, setEdit] = useState(true);
  const [debug, setDebug] = useState<Debug>({
    techs: [''],
  });

  console.log(debug);

  const handleTechChange = (newTechs: string[]) => {
    setDebug({ ...debug, techs: newTechs });
  };

  return (
    <ChakraProvider>
      <TechsInput setDebug={handleTechChange} techs={debug.techs} isEdit={isEdit} />
      <Button onClick={() => setEdit((prev) => !prev)}>toggle</Button>
    </ChakraProvider>
  );
}

export default App;
