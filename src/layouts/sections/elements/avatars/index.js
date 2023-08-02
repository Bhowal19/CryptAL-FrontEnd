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

// Avatars page components
import AvatarGroup from "layouts/sections/elements/avatars/components/AvatarGroup";
import AvatarSize from "layouts/sections/elements/avatars/components/AvatarSize";

// Avatars page components code
import avatarGroupCode from "layouts/sections/elements/avatars/components/AvatarGroup/code";
import avatarSizeCode from "layouts/sections/elements/avatars/components/AvatarSize/code";

function Avatars() {
  return (
    <BaseLayout
      title="Avatars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/avatars" },
        { label: "Avatars" },
      ]}
    >
      <View title="Avatar Group" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Avatar Size" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
