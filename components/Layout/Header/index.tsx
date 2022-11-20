import { Greeting, Container, Title, SubTitle } from "./styles";
import { LogoutButton } from "../../Controllers/LogoutButton";

export function Header() {
    function handleLogout() {}

    return (
        <Container>
            <Greeting>
                <Title>HelpDesk</Title>
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
            </Greeting>
            <LogoutButton onPress={handleLogout}/>
        </Container>
    )
}