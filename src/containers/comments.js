import React from "react";
import { connect } from "react-redux";
import ReactPaginate from 'react-paginate';

import { fetchComments, addCommentToFavorites, deleteCommentFromFavorites } from "../actions/index";

import CommentsList from "../components/commentsList";

class Comments extends React.Component {

    state = {
        listItem: this.props.comments,
        pageItem: 0,
        pageCount: 20
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchComments();
    }

    addFavoriteComment = id => {
        this.props.addCommentToFavorites(id);
    }

    deleteFavoriteComment = id => {
        this.props.deleteCommentFromFavorites(id);
    }

    handlePageClick = (data) => {
        window.scrollTo(0, 0);
        this.setState({ pageItem: data.selected });
    }

    enteredItem = () => {
        const interval = this.state.pageItem === 0 ? 1 : this.state.pageItem * this.state.pageCount;
        const list = this.state.listItem.slice(interval, interval + this.state.pageCount);

        return list;
    }

    changePageElements = (event) => {
        const value = +event.target.value
        this.setState({ pageCount: value });
        window.scrollTo(0, 0);
    }


    render() {
        const { postsList, favoritesComments } = this.props
        const { listItem, pageCount } = this.state;

        return (
            <div className="container">
                <CommentsList comments={this.enteredItem()} 
                    posts={postsList}
                    favoritesComments={favoritesComments}
                    addFavoriteComment={this.addFavoriteComment}
                    deleteFavoriteComment={this.deleteFavoriteComment} />
                <nav aria-label="..." className="nav-pag">
                    <div className="select">
                        <select name="slct" onChange={this.changePageElements} value={pageCount}>
                            <option value="20">Кол-во элементов 20</option>
                            <option value="50">Кол-во элементов 50</option>
                            <option value="100">Кол-во элементов 100</option>
                        </select>
                    </div>
                    <ReactPaginate previousLabel={" < previous"}
                        nextLabel={"next >"}
                        pageCount={listItem.length / pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={this.handlePageClick}
                        containerClassName="pagination justify-content-center"
                        subContainerClassName="pages pagination"
                        activeClassName="active"
                        breakClassName="page-link"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        previousClassName="page-item"
                        nextLinkClassName="page-link"
                        nextClassName="page-item"
                        disabledClassName="disabled" />
                </nav>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.data.commentsList || [],
    postsList: state.data.postsList || [],
    favoritesComments: state.data.favoritesComments || []
})

export default connect(mapStateToProps, { fetchComments, addCommentToFavorites, deleteCommentFromFavorites })(Comments);