import React from 'react';
import { connect } from 'react-redux'
import { switchCurrentView, deleteImage, renameImage} from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class DetailsView extends React.PureComponent {
    
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    
    handleDeleteClick() {
        this.props.switchCurrentViewToMaster();
        this.props.deleteImage(this.props.image.slug_id);
    }

    render() {
        
        const {switchCurrentViewToMaster, image} = this.props;

        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{flexGrow: 1}}>
                            <Button style={{color:"white"}} veriant="outlined" onClick={switchCurrentViewToMaster}>
                                <FontAwesomeIcon icon="th"/>&nbsp; Back to Grid View
                            </Button>
                        </div>
                        <Typography style={{color:"white"}}>
                            Rename:&emsp;
                        </Typography>
                        <TextField
                            inputProps={{
                                style:{color:"yellow"}
                            }}
                            value={image.name} onChange={(e) => this.props.renameImage(image.slug_id, e.target.value)} />
                        <Button style={{color:"red"}} onClick={this.handleDeleteClick}>
                            DELETE IMAGE&nbsp;<FontAwesomeIcon icon="trash"/>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container alignContent={"center"} justify={"center"}>
                    <Grid xs={6}>
                        <Card style={{marginTop:16,marginBottom:16}}>
                            <strong>Name:</strong> {image.name}<br />
                            <strong>URL:</strong> {image.url}<br />
                            <strong>Author:</strong> {image.author}<br />
                            <strong>ID:</strong> {image.slug_id}
                        </Card>
                    </Grid>
                    <Grid item>
                        <img style={{maxWidth:"100%"}} src={image.url} alt={image.name} />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const getCurrentImage = (state) => (
    state.images.find((image) => (image.slug_id === state.currentImage))
);

const mapStateToProps = (state /*, ownProps*/) => ({
    image: getCurrentImage(state)
});

const mapDispatchToProps = (dispatch) => ({ 
    switchCurrentViewToMaster:() => dispatch(switchCurrentView('master')),
    deleteImage: (imageId) => dispatch(deleteImage(imageId)),
    renameImage: (imageId, name) => dispatch(renameImage(imageId, name))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailsView);