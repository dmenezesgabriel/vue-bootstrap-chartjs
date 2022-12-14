import type { Story } from "@storybook/vue3";
import SideBar from "~/components/SideBar/SideBar.vue";
import SideBarNav from "~/components/SideBar/SideBarNav.vue";
import SideBarNavItem from "~/components/SideBar/SideBarNavItem.vue";
import SideBarNavLink from "~/components/SideBar/SideBarNavLink.vue";

export default {
  title: "Components/SideBar/SideBar",
  component: { SideBar },
  subcomponents: { SideBarNav, SideBarNavItem, SideBarNavLink },
  decorators: [
    () => ({
      template: "<div style='height: 100%; width: 100%'><story /></div>",
    }),
  ],
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
  },
};

const Template: Story = (args: any, { argTypes }) => ({
  components: { SideBar, SideBarNav, SideBarNavItem, SideBarNavLink },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
        <SideBar v-bind='args'>
          <SideBarNav>
            <SideBarNavItem>
              <SideBarNavLink>
                <template #icon>
                  <i class="bi bi-1-circle"></i>
                </template>
                <template #text>
                  Link One
                </template>
              </SideBarNavLink>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                <template #icon>
                  <i class="bi bi-2-circle"></i>
                </template>
                <template #text>
                  Link Two
                </template>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                <template #icon>
                  <i class="bi bi-3-circle"></i>
                </template>
                <template #text>
                  Link Three
                </template>
              </SideBarNavLink>
            </SideBarNavItem>
            <SideBarNavItem>
              <SideBarNavLink>
                <template #icon>
                  <i class="bi bi-4-circle"></i>
                </template>
                <template #text>
                  Link Four
                </template>
              </SideBarNavLink>
            </SideBarNavItem>
          </SideBarNav>
        </SideBar>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  smallScreenPlacemente: "bottom",
};
