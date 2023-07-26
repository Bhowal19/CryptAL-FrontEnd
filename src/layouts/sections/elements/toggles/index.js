/*
=========================================================
* CryptAL React - v2.1.0
=========================================================

* Product Page: https://Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)/product/material-kit-react
* Copyright 2023 Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

Coded by Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Toggles page components
import Toggle from "layouts/sections/elements/toggles/components/Toggle";
import ToggleContext from "layouts/sections/elements/toggles/components/ToggleContext";

// Toggles page components code
import toggleCode from "layouts/sections/elements/toggles/components/Toggle/code";
import toggleContextCode from "layouts/sections/elements/toggles/components/ToggleContext/code";

function Toggles() {
  return (
    <BaseLayout
      title="Toggles"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/toggles" },
        { label: "Toggles" },
      ]}
    >
      <View title="Toggle" code={toggleCode}>
        <Toggle />
      </View>
      <View title="Toggle context" code={toggleContextCode}>
        <ToggleContext />
      </View>
    </BaseLayout>
  );
}

export default Toggles;
