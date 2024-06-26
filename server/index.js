import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import systemData from "./routes/manage/systemData.js";
import login from "./routes/login.js";
import userData from "./routes/userData.js";
import municipalities from "./routes/getMunicipalities.js";
import system from "./routes/system.js";
import auditFields from "./routes/manage/auditFields.js";
import newField from "./routes/manage/newField.js";
import field from "./routes/info/field.js";
import archiveField from "./routes/manage/archiveField.js";
import compliance from "./routes/info/compliance.js";
import fiedList from "./routes/info/fieldList.js";
import bpoc from "./routes/update/updateProps.js";
import complianceData from "./routes/info/complianceData.js";
import userInfo from "./routes/info/userInfo.js";
import indicatorStatus from "./routes/update/indicatorStatus.js";
import indicatorNotify from "./routes/update/notifyIndication.js";
import newUser from "./routes/manage/newUser.js";
import areas from "./routes/info/areas.js";
import bindingKey from "./routes/update/newBindingKey.js";
import keyList from "./routes/info/keysList.js";
import newAudit from "./routes/update/newAudit.js";
import auditInfo from "./routes/info/auditInfo.js";
import newArea from "./routes/manage/newArea.js";
import draftedArea from "./routes/manage/drafted.js";
import saveDraft from "./routes/update/saveDraft.js";
import areaDraftList from "./routes/info/areaDraftList.js";
import localeList from "./routes/info/locale.js";
import newLocale from "./routes/manage/newLocale.js";
import archive from "./routes/update/archiveArea.js";
import userList from "./routes/info/users.js"

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/system", systemData);
app.use("/auth", login);
app.use("/auth", userData);
app.use("/data", municipalities);
app.use("/data", system);
app.use("/data", auditFields);
app.use("/data", newField);
app.use("/data", field);
app.use("/data", archiveField);
app.use("/data", compliance);
app.use("/data", bpoc);
app.use("/data", complianceData);
app.use("/data", userInfo);
app.use("/data", indicatorStatus);
app.use("/data", indicatorNotify);
app.use("/data", newUser);
app.use("/data", fiedList);
app.use("/data", areas);
app.use("/data", bindingKey);
app.use("/data", keyList);
app.use("/data", newAudit);
app.use("/data", auditInfo);
app.use("/data", newArea);
app.use("/data", draftedArea);
app.use("/data", saveDraft);
app.use("/data", areaDraftList);
app.use("/data", localeList);
app.use("/data", newLocale);
app.use("/data", archive);
app.use("/data", userList)

app.listen(port, () => {
  console.log("Listening on port, 2024:", port);
});
