<script>
import setReviewersMutation from './queries/set_reviewers.mutation.graphql';
import getMergeRequestReviewers from '~/sidebar/queries/get_merge_request_reviewers.query.graphql';

export default {
  inject: ['projectPath', 'issuableIid'],
  props: {
    selectedReviewers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async updateReviewers() {
      this.loading = true;

      await this.$apollo.mutate({
        mutation: setReviewersMutation,
        variables: {
          reviewerUsernames: this.selectedReviewers,
          projectPath: this.projectPath,
          iid: this.issuableIid,
        },
        // 新增：mutation 完成后重新拉取 reviewers 查询
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: getMergeRequestReviewers,
            variables: {
              fullPath: this.projectPath,
              iid: this.issuableIid,
            },
          },
        ],
      });

      this.loading = false;
    },
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      updateReviewers: this.updateReviewers,
    });
  },
};
</script>
