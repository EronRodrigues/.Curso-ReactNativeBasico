import { Container, Counter, Header, Title } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { Load } from "../../Animations/Load";
import { Order, OrderProps } from "../../Controllers/Order";
import { Filters } from "../../Controllers/Filters";

export function Orders() {
    const [status, setStatus] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<OrderProps[]>([
        { id: "sdasda", description: "description", equipment: "Casda", patrimony: "asdasda", status: "closed" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Container>
            <Filters onFilter={setStatus}/>
            <Header>
                <Title>Chamados {status === "open" ? "abertos" : "encerrados"} </Title>
                <Counter>{orders.length}</Counter>
            </Header>
            {
                isLoading ?
                    <Load/> :
                    <FlatList
                        data={orders}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Order data={item}/>}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    />
            }
        </Container>
    )
}