<template>
    <div>
        <div>
            <nav
                class="navbar navbar-dark bg-dark justify-content-between mt-2"
            >
                <a class="navbar-brand">Home</a>
                <form class="form-inline">
                    <button
                        @click.prevent="fireModal()"
                        type="button"
                        class="btn btn-outline-success my-2 my-sm-0"
                        data-toggle="modal"
                        data-target="#createArticleModal"
                    >
                        Create Article
                    </button>
                    <!-- <input
                        class="form-control mx-2 mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button> -->
                </form>
            </nav>
        </div>
        <!-- modal -->
        <div>
            <div
                class="modal fade"
                id="createArticleModal"
                tabindex="-1"
                role="dialog"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Add New Article
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput"
                                        >Title</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="title"
                                        placeholder="Title of the Article"
                                        v-model="title"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2"
                                        >Body</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="body"
                                        placeholder="Body of the Article"
                                        v-model="body"
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                @click.prevent="submit()"
                                type="button"
                                class="btn btn-primary"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "./../eventBus.js"

export default {
    data() {
        return {
            title: "",
            body: ""
        };
    },
    methods: {
        clearInputs(){
            this.id = "",
            this.title = "";
            this.body = ""
        },
        fireModal() {
            $("#createArticleModal").on("shown.bs.modal", function() {
                $("#title").trigger("focus");
                // $('#myModal').modal('handleUpdate');
            });
        },
        submit() {
            let saveData = {
                title: this.title,
                body: this.body
            };
            // console.log(saveData);
            axios.post("api/create-article",saveData).then(res => {
                // console.log(res.data.data);
                if(res.data.data){
                    $("#createArticleModal").modal("hide");
                    EventBus.$emit('event-name', res.data.data);
                }
            });
            this.clearInputs();
        }
    }
};
</script>
