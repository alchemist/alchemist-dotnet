import {INode, WorkspaceConfig, FolderNodeGroup, NodeGroupType} from "@alchemist/core";

export class NamespaceNodeGroup extends FolderNodeGroup
{
    public static NodeGroupType = new NodeGroupType("namespace-node-group", "Namespace");

    public constructor(public isNamespace = false, public name = "", public workspaceConfig = new WorkspaceConfig(), public nodes: Array<INode> = [])
    {
        super(name, workspaceConfig, nodes);
        this.nodeGroupTypeId = NamespaceNodeGroup.NodeGroupType.id;
    }
}