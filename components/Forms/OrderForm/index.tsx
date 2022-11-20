import { Button } from "../../Controllers/Button";
import { Input } from "../../Controllers/Input";
import { Form, Title } from "./styles";
import { useState } from "react";
import { TextArea } from "../../Controllers/TextArea";

export function OrderForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [patrimony, setPatrimony] = useState("");

    function handleNewOrder() {}

    return (
        <Form>
            <Title>Novo chamado</Title>
            <Input placeholder="Número do Patrimônio" onChangeText={setPatrimony}/>
            <TextArea placeholder="Descrição" onChangeText={setDescription}/>
            <Button title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder}/>
        </Form>
    )
}