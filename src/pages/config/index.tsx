import Card from "../../components/card";
import Footer from "../../components/footer";
import Form from "../../components/form";
import PlayerList from "../../components/playerList";

export default function Config() {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <PlayerList />
        <Footer />
      </section>
    </Card>
  );
}
