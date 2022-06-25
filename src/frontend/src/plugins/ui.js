import Vue from "vue";

import AppLayout from "@/layouts/AppLayout";
import AppLayoutMain from "@/layouts/AppLayoutSidebar";

import AppDrag from "@/common/components/AppDrag";
import AppDrop from "@/common/components/AppDrop";
import Logo from "@/common/components/Logo";
import Avatar from "@/common/components/Avatar";

Vue.component("AppLayout", AppLayout);
Vue.component("AppLayoutSidebar", AppLayoutMain);
Vue.component("AppDrag", AppDrag);
Vue.component("AppDrop", AppDrop);
Vue.component("Logo", Logo);
Vue.component("Avatar", Avatar);
