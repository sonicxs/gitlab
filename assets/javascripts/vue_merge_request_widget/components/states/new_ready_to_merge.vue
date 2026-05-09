<script>
import mergeRequestQueryVariablesMixin from '../../mixins/merge_request_query_variables';
import readyToMergeQuery from '../../queries/states/new_ready_to_merge.query.graphql';
import StatusIcon from '../mr_widget_status_icon.vue';

export default {
  apollo: {
    canMerge: {
      query: readyToMergeQuery,
      skip() {
        return !this.mr || !window.gon?.features?.mergeRequestWidgetGraphql;
      },
      variables() {
        return this.mergeRequestQueryVariables;
      },
      update: (data) => data?.project?.mergeRequest?.userPermissions?.canMerge,
    },
  },
  components: {
    StatusIcon,
  },
  mixins: [mergeRequestQueryVariablesMixin],
  props: {
    mr: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      canMerge: null,
    };
  },
  computed: {
    isApproved() {
      // 这里的 this.mr 指向的是 props 中传入的那个来自 mr_widget_store.js 的实例
      return this.mr.isApproved;
    },
  },
};
</script>

<template>
  <div class="mr-widget-body media">
    <status-icon status="success" />
    <p class="media-body gl-m-0! gl-font-weight-bold gl-text-gray-900!">
      <template v-if="canMerge">
        <template v-if="isApproved">
          {{ __('Ready to merge!') }}
        </template>
        <template v-else>
          {{ __('Waiting for approvals!') }}
        </template>
      </template>
      <template v-else>
        {{ __('Ready to merge by members who can write to the target branch.') }}
      </template>
    </p>
  </div>
</template>
