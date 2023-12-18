<script>
  import { onMount, onDestroy } from "svelte";
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  let currentDate = "";
  let iso = "";
  let refresher = null;
  const updateCD = () => {
    const today = new Date();
    const month = months[today.getMonth()];
    const day = days[today.getDay()];
    const date = today.getDate().toString().padStart(3, "0");
    const year = today.getFullYear().toString().substring(2).padStart(3, "X");
    iso = `${year}-${month}-${day}`;
    currentDate = `${day}•${date}•${month}•${year}`;
  };
  onDestroy(() => {
    clearInterval(refresher);
  });
  onMount(() => {
    updateCD();
    refresher = setInterval(updateCD, 60 * 1000);
  });
</script>

<time datetime={iso}>{currentDate}</time>
