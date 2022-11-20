import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Container, Content, Footer, Header, Info, Label, OrderStyleProps, Status, Title } from "./styles";

export type OrderProps = OrderStyleProps & {
    id: string;
    patrimony: string;
    equipment: string;
    description: string;
}

type Props = {
    data: OrderProps;
}

export function Order({ data }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Status status={data.status}/>
            <Content>
                <Header>
                    <Title>Computador Gamer</Title>
                    <MaterialIcons
                        name={data.status === "open" ? "hourglass-empty" : "check-circle"}
                        size={24}
                        color={data.status === "open" ? COLORS.SECONDARY : COLORS.PRIMARY}
                    />
                </Header>
            <Footer>
                <Info>
                    <MaterialIcons name="schedule" size={16} color={COLORS.SUBTEXT} />
                    <Label>20/11/2022</Label>
                </Info>
                <Info>
                    <MaterialIcons name="my-location" size={16} color={COLORS.SUBTEXT} />
                    <Label>402345</Label>
                </Info>
            </Footer>
            </Content>
        </Container>
    );
}