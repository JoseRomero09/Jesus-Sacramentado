import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TopicSection } from './components/TopicSection/TopicSection';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.overlay} aria-hidden="true"></div>
      <main className={styles.container}>
        <Header 
          title="15 Minutos con Jesús Sacramentado" 
          subtitle="Lamatepec" 
          imageSrc="/assets/monstrance.png" 
        />

        <article className={styles.content}>
          <TopicSection isIntro>
            <p>No es preciso, hijo mío, saber mucho para agradarme mucho; basta que me ames mucho. Háblame aquí, sencillamente, como hablarías al más íntimo de tus amigos, como hablarías a tu mamá o a tu hermano. Activa tu fe, estoy delante de ti. Te oigo, y te miro como el mejor de los padres miraría a su hijo muy querido. Como la mejor de las madres a su hijo pequeño, por quien daría mil veces su vida. ¿Crees esto?</p>
          </TopicSection>

          <TopicSection title="¿Necesitas alguna gracia?">
            <p>Me refiero a si necesitas algo para ti. Si lo que quieres es pedirme por otras personas, más adelante están escritas unas ideas para que conversemos de ellas. Pero si quieres partir por ti, haz, si quieres, una lista de lo que tú necesitas y ven, léela en mi presencia.</p>
            <p>No pienses que tus defectos me alejan a Mí de ti. Dime francamente lo que te pesa en la conciencia: si sientes que eres orgulloso, flojo, que te dejas llevar sobre todo por tus ganas, poniéndote a ti en primer lugar, y postergas tus estudios, tus deberes conmigo y con tus padres y hermanos, si sientes que eres débil y pierdes fácilmente ante las tentaciones, si eres inconstante, negligente... Y pídeme luego que venga en ayuda de los esfuerzos, pocos o muchos, que haces para liberarte de tus faltas. ¡No te avergüences, hijo mío! ¡Hay en el cielo tantos y tantos justos, tantos y tantos santos que tuvieron esos mismos defectos! Pero rezaron con humildad..., y poco a poco se vieron libres de ellos.</p>
            <p>No vaciles en pedirme bienes espirituales y materiales: salud, memoria, éxito en tus trabajos, proyectos o estudios. Todo eso puedo darte, y deseo que me lo pidas, siempre que no obstaculicen, sino más bien ayuden a tu santificación. Precisamente hoy, ¿qué necesitas? ¿Qué puedo hacer por ti? ¡Si supieras cuánto deseo poder ayudarte!</p>
          </TopicSection>

          <TopicSection title="¿Tienes ahora algún proyecto?">
            <p>Cuéntamelo todo. ¿Qué te preocupa?, ¿qué piensas?, ¿qué deseas? Dime qué cosa en particular llama tu atención hoy, qué deseas más ardientemente y con qué medios cuentas para obtenerlo. Dime si no te resultan tus planes, y te diré las causas de tus dificultades. ¿Deseas apoyarte en mi? Hijo mío, yo soy el Señor de los corazones, y los muevo adonde deseo sin violentar su libertad.</p>
          </TopicSection>

          <TopicSection title="¿Sientes acaso tristeza o mal humor?">
            <p>Cuéntame tus tristezas detalladamente. ¿Te ha pasado algo? ¿Te ha herido alguien? ¿Se han alejado de ti personas que quieres, y no entiendes el por qué?, o ¿es otra cosa?</p>
            <p>Acércate a mi corazón y encontrarás el alivio para las heridas del tuyo. Cuéntamelo todo y pídeme lo que quieras. Y si fuera el caso, hijo mío, que notaras que tus sufrimientos son porque no eres humilde sino orgulloso, no temas "perder", no temas "que se salgan con la suya": tú ganarás mucho más dejando libre tu alma de esa rabia o, tal vez, odio, porque así puedo llenarte de mis dones, y puedo vivir en ti.</p>
            <p>Y quizás comprendas que necesitas perdonar, y me quieras pedir la fuerza para hacerlo: hazlo y acabarás por decirme que, a semejanza de Mí, todo lo perdonas, todo lo olvidas, y en pago... recibirás mi bendición consoladora.</p>
            <p>¿Hay algo que te da miedo o inseguridad? Apóyate en mi providencia. Yo estoy contigo, a tu lado. Veo todo, escucho todo, lo puedo todo, y no te abandonaré en ningún momento.</p>
          </TopicSection>

          <TopicSection title="¿Y no tienes alguna alegría que comunicarme?">
            <p>¿Quieres hacerme partícipe de ella como buen amigo tuyo? Cuéntame lo que desde ayer, desde la última visita que me hiciste, ha consolado y hecho como sonreír tu corazón. Quizá has tenido agradables sorpresas; quizá has visto disipadas graves dudas, has recibido buenas noticias, un mensaje, un detalle de cariño, has vencido una dificultad, o salido de una situación angustiosa. Todo esto es obra mía. Yo te lo he concedido. ¿Por qué no has de manifestarme tu amor a través de tu gratitud, y decirme sencillamente como un hijo a su padre: "Gracias, Padre mío"?</p>
          </TopicSection>

          <TopicSection title="¿Tienes alguna promesa que hacerme?">
            <p>Leo, ya lo sabes, el fondo de tu corazón: a los hombres se engaña fácilmente; a Dios, no. Háblame pues, con toda sinceridad.</p>
            <p>¿Tienes firme resolución de no exponerte más a aquella ocasión de pecado? ¿De privarte de aquel objeto que te dañó? ¿De no leer más aquel libro que excitó tu imaginación? ¿De evitar aquella persona que quitó paz a tu alma? ¿Vas a ser generoso con esa persona a quien consideras tu enemiga porque te ofendió?</p>
          </TopicSection>

          <TopicSection title="¿Necesitas hacerme alguna petición?">
            <p>¿En favor de tus papás, hermanos, amigos o conocidos? Dime su nombre. Dime directamente qué quieres que haga por ellos. Pídeme mucho, muchas cosas; no vaciles en pedir, pídeme como piden los niños. Me gustan los corazones generosos, que llegan a olvidarse de sí mismos para atender las necesidades ajenas.</p>
            <p>Quisiera que tengas un corazón grande, y que en tus peticiones y preocupaciones no falten los pobres. Todos aquellos que sufren una necesidad: los enfermos, los que experimentan la pobreza material, y sobre todo los que están alejados de Mí, porque no creen, porque han perdido la esperanza o porque no aman.</p>
            <p>Cuéntame con sinceridad: ¿te preocupan estas cosas?, ¿te preocupas si ves a alguno de tus parientes o amigos alejados de Mí, y buscas remediarlo? Háblame de ellos y confía en que te ayudaré. Y que esa confianza te lleve a atreverte a hacer lo que te pediré, como si tú fueras mis manos.</p>
          </TopicSection>

          <TopicSection isIntro>
            <p>Recuerda que he prometido escuchar toda súplica que salga del corazón.</p>
            <p>Ahora, hijo mío, regresa a tus ocupaciones habituales, a tu familia, a tu trabajo, a tus estudios... pero no olvides estos quince minutos de conversación íntima que hemos tenido en la quietud del sagrario. Guarda en lo posible silencio, modestia, resignación, amor a tu prójimo. Ama a mi Madre, que lo es también tuya, la Virgen Santísima, y vuelve otra vez a mí con el corazón más amoroso, más entregado; en el mío encontrarás cada día nuevo amor, nuevos beneficios, nuevos consuelos.</p>
          </TopicSection>
        </article>
        
        <Footer />
      </main>
    </>
  );
}

export default App;
