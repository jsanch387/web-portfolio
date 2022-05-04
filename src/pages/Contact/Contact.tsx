import { Grid } from "@mui/material";
import useContactStyles from "./Contact.style";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const Contact = (): JSX.Element => {
  const classes = useContactStyles();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csm5kb8",
        "portfolio-template",
        e.target,
        "2t6HvU1nv0tzx_zlL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className={classes.contactSection}>
      <Grid container className={classes.container}>
        <Grid item container justifyContent="center" direction="column">
          <h1 className={classes.title}>Contact</h1>
          <p className={classes.paragraph}>
            Feel free to contact me with any questions.
          </p>
          <hr className={classes.divider} />
        </Grid>
        <Grid item container className={classes.messageContainer}>
          <Grid item xs={12} md={4}>
            Image
          </Grid>

          <Grid item container xs={12} md={5} direction="column">
            <form onSubmit={sendEmail}>
              <TextField
                name="subject"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.input}
              />
              <TextField
                name="message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                className={classes.input}
                multiline={true}
                rows={4}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
