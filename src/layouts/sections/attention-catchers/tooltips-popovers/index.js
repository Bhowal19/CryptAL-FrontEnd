/*
=========================================================
* CryptAL React - v2.1.0
=========================================================

* Product Page: https://Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)/product/material-kit-react
* Copyright 2023 Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

Coded by Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

 =========================================================

* .
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Tooltips and popovers page components
import Popovers from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers";
import Tooltips from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips";

// Tooltips and popovers page components code
import popoversCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers/code";
import tooltipsCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips/code";

function TooltipsPopovers() {
  return (
    <BaseLayout
      title="Tooltip & Popovers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/tooltips-popovers" },
        { label: "Tooltip & Popovers" },
      ]}
    >
      <View title="Popovers" code={popoversCode}>
        <Popovers />
      </View>
      <View title="Tooltips" code={tooltipsCode}>
        <Tooltips />
      </View>
    </BaseLayout>
  );
}

export default TooltipsPopovers;
