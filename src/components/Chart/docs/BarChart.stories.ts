import { BarChart } from "~/components/Chart/BaseChart";
import type { Story, Meta } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

// Metadata default export
export default {
  title: "Components/ChartJS/BarChart",
  parameters: {
    backgrounds: {
      values: [{ name: "dark", value: "#1e293b" }],
    },
  },
  decorators: [
    () => ({
      template:
        "<div style='padding: 3em; width: 600px; height: 300px;'><story /></div>",
    }),
  ],
  argTypes: {
    onClick: {},
  },
  component: BarChart,
} as Meta<typeof BarChart>;

const actionsData = {
  onClick: action("click"),
};

const Template = (args: any) => ({
  components: { BarChart },
  setup() {
    return { args, ...actionsData };
  },
  template: "<BarChart v-bind='args' />",
});

// TODO
// Change to StoryFn<typeof BarChart>

// Vertical Bar Chart
export const Default: Story = Template.bind({});
Default.args = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  },
};
Default.storyName = "Vertical Bar Chart";

// Horizontal Bar Chart
export const Horizontal: Story = Template.bind({});
Horizontal.args = {
  ...Default.args,
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  },
};
Horizontal.storyName = "Horizontal Bar Chart";
