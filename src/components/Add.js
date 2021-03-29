import React , {useState, useEffect} from 'react';
import {TextField, Button, Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from "react-redux";
import {editContact} from '../redux/Actions'
import { addContacts } from '../redux/Reducer'
import Fab from '@material-ui/core/Fab'

const Add = ({order, fname, lname, email, id}) => {
    const useStyles=makeStyles((theme) =>({
        modal:{
            position: 'absolute',
            width: 400,
            backgroundColor:'white',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: "16px 32px 24px",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        textField:{
            width: '100%'
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          },
    }))

    const styles = useStyles();
    const dispatch = useDispatch();

    const [modal, setModal] =useState(false)
    const [firstname, setfirstName] =useState("")
    const [lastname, setlastName] =useState("")
    const [emaill, setEmail] =useState("")
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(()=>{
    if(order === "edit"){
        setfirstName(fname)
        setlastName(lname)
        setEmail(email)
    }
    },[])

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSend =()=>{
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        const formData = new FormData();
        formData.append("first_name", firstname);
        formData.append("last_name", lastname);
        formData.append("email", emaill);
        formData.append("file", selectedFile);
         const object = {
            id: rand,
            email: emaill,
            first_name: firstname,
            last_name: lastname,
            avatar: "http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
        }
         dispatch(addContacts(formData, object))
         setModal(!modal)
    }

    const handleEdit = ()=>{
        const data = {
            id: id,
            first_name:firstname,
            last_name:lastname,
            email:emaill
        }
        dispatch(editContact(data));
        setModal(!modal)
    }

const body = (
    order === "add" ?
    <div className={styles.modal}>
        <div align="center">
        <h2>Add contact</h2>
        </div>
        <TextField label="First Name" onChange={(e) => setfirstName(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <TextField label="Last Name" onChange={(e) => setlastName(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <TextField label="Email" onChange={(e) => setEmail(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <br></br>
        <input type="file" accept=".jpg, .png, .jpeg" onChange={(e) => setSelectedFile(e.target.files[0])}/>
        <div align="right">
        <Button color="primary" onClick={handleSend}>Add</Button>
        <Button color="primary" onClick={handleModal}>Cancel</Button>
        </div>
    </div>:
        <div className={styles.modal}>
        <div align="center">
        <h2>Edit Contact</h2>
        </div>
        <TextField label="First Name" value={firstname} onChange={(e) => setfirstName(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <TextField label="Last Name" value={lastname} onChange={(e) => setlastName(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <TextField label="Email" value={emaill} onChange={(e) => setEmail(e.target.value)} className={styles.textfield}></TextField>
        <br></br>
        <div align="right">
        <Button color="primary" onClick={handleEdit}>Edit</Button>
        <Button color="primary" onClick={handleModal}>Cancel</Button>
        </div>
    </div>
)
    return (
        <>
                    {order ==="add" ?
                    <Fab color="primary" aria-label="add" onClick={handleModal} className={styles.fab}>
                    <FontAwesomeIcon icon={faPlus}/>
                    </Fab>:
                    <FontAwesomeIcon icon={faPencilAlt} onClick={handleModal}/>}
                    <Modal
                    open={modal}
                    onClose={handleModal}>
                        {body}
                    </Modal>
        </>
    );
};

export default Add;