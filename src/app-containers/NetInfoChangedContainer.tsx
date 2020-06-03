import NetInfo, { NetInfoSubscription } from "@react-native-community/netinfo";
import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { ActionType } from "../state/actions/ActionType";
import { INetInfoChanged } from "../state/actions/INetworkAction";
import { IState } from "../state/state/IState";

interface Props {
    changeNetInfo: (connected: boolean) => void;
    // Workaround: require children for fixing ts error
    // "...has no properties in common with type ‘IntrinsicAttributes & IntrinsicClassAttributes<...'
    children: ReactNode;
}

class NetInfoChangedContainer extends Component<Props> {
    private unsubscribe?: NetInfoSubscription;

    public componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener((state) =>
            this.props.changeNetInfo(state.isConnected)
        );
    }

    public componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    public render() {
        return this.props.children;
    }
}

const mapStateToProps = (state: IState) => state;

const mapDispatchToProps = {
    changeNetInfo: (connected: boolean): INetInfoChanged => ({
        type: ActionType.NetInfoChanged,
        payload: { connected },
    }),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NetInfoChangedContainer);
