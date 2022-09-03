import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

function LectureTreeView() {
  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{
        height: "100%",
        flexGrow: 1,
        maxWidth: 600,
        overflowY: "auto",
        margin: "0 auto",
      }}
    >
      <TreeItem nodeId="1" label="فصل اول">
        <TreeItem nodeId="2" label="نظري">
          <TreeItem nodeId="3" label="analaysis 1 ">
            <TreeItem nodeId="4" label="ملفات مساعدة" />
            <TreeItem nodeId="5" label="سلايدات">
              <TreeItem nodeId="6" label="lec1.pdf" />
            </TreeItem>
            <TreeItem nodeId="6" label="rbcs" />
          </TreeItem>
          <TreeItem nodeId="7" label="general algerbra" />
        </TreeItem>
        <TreeItem nodeId="8" label="عملي"></TreeItem>
      </TreeItem>
      <TreeItem nodeId="9" label="فصل ثاني">
        <TreeItem nodeId="10" label="نظري">
          <TreeItem nodeId="11" label="analaysis 1 ">
            <TreeItem nodeId="12" label="ملفات مساعدة" />
            <TreeItem nodeId="13" label="سلايدات">
              <TreeItem nodeId="14" label="lec1.pdf" />
            </TreeItem>
            <TreeItem nodeId="15" label="rbcs" />
          </TreeItem>
          <TreeItem nodeId="16" label="general algerbra" />
        </TreeItem>
        <TreeItem nodeId="17" label="عملي"></TreeItem>
      </TreeItem>
    </TreeView>
  );
}

export default LectureTreeView;
