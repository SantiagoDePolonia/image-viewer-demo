import React from 'react';
import { connect } from 'react-redux'
import {switchCurrentImage, switchCurrentView} from '../actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';

class MasterView extends React.PureComponent {
    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(imageId) {
        this.props.switchCurrentImage(imageId);
        this.props.switchCurrentView('details');
    }
    render() {
        
        const {images} = this.props;

        return (
            <React.Fragment>
                <AppBar position="static" style={{marginBottom:24}}>
                    <Toolbar>
                        Images Grid
                    </Toolbar>
                </AppBar>
                <GridList cols={4}>
                    {/* <GridListTile key="Subheader" cols={4} style>
                        <ListSubheader component="div">Images Grid</ListSubheader>
                    </GridListTile> */}
                    {images.map(image => (
                        <GridListTile key={image.slug_id}
                            onClick={() => (this.handleClick(image.slug_id))}
                        >
                            <img src={image.url} alt={image.name} />
                            <GridListTileBar
                                title={image.name}
                                // subtitle={<span>by: {image.author}</span>}
                                // actionIcon={
                                //     <IconButton className={classes.icon}>
                                //     <InfoIcon />
                                //     </IconButton>
                                // }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => ({
    images: state.images
});

const mapDispatchToProps = (dispatch) => ({ 
    switchCurrentImage:(imageId) => dispatch(switchCurrentImage(imageId)),
    switchCurrentView:(viewType) => dispatch(switchCurrentView(viewType)),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterView);