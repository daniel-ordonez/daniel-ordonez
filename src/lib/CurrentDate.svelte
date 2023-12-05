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
  let fullDate = "";
  let refresher = null;
  const updateCD = () => {
    const today = new Date();
    const month = months[today.getMonth()];
    const day = days[today.getDay()];
    const date = today.getDate().toString().padStart(3, "0");
    const year = today.getFullYear().toString().substring(2).padStart(3, "X");
    fullDate = `${month}•${day}•${date}•${year}`;
  };
  onDestroy(() => {
    clearInterval(refresher);
  });
  onMount(() => {
    updateCD();
    refresher = setInterval(updateCD, 60 * 1000);
  });
</script>

<span>{fullDate}</span>
