import { makeStyles } from "@mui/styles";

const useProgressBarStyles = makeStyles({
    fillContainer: {
        height: 20,
        width: '90%',
        backgroundColor: '#b3b3b3',
        borderRadius: 50,
        margin: '10px 30px'
    },
filler: {
    height: '100%',
    backgroundColor: '#128FFF',
    borderRadius: 'inherit',
    textAlign: 'right'
},
label: {
    padding: 10,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    
},
container: {
    width: '80%',
    paddingBottom: 20
},
title: {
    textAlign: 'center',
    margin: 0,
    fontFamily: "Century Gothic",
    fontSize: 20
},
divider: {
    border: ".5px solid #128FFF",
    width: "90%",
    alignSelf: 'center',
    marginTop: 30
  },
})

export default useProgressBarStyles;