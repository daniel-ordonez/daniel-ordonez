<template>
  <div class="card">
    <a
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="card__content transparent flex gap--sm"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
            />
          </g>
        </svg>
      </div>
      <div>
        <div>
          <strong>{{ item.author }}</strong>
        </div>
        <div>{{ item.name }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "LinkRef",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
