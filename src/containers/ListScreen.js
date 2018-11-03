import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getResources } from '../actions/resource';
import Card from '../components/Card';
import Header from '../components/Header';
import FormSearch from '../containers/FormSearch';

class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      numberPartial: 10
    };
  }

  updateResources() {
    this.props.getResources();
  }

  componentDidMount() {
    console.log('DID MOUNT: ');
  }

  incrementPage() {
    this.setState({ page: this.state.page + 1 });
  }

  getPartialResources(resources) {
    return [...resources.slice(0, this.state.page * this.state.numberPartial)];
  }

  renderItem = ({ item }) => <Card resource={item.resource} />;

  render() {
    const { loading } = this.props;
    const resources = this.getPartialResources(this.props.resources);
    return (
      <View>
        <Header title="Translations Mile" leftIcon="menu" rightIcon="home" />
        <FormSearch />
        <FlatList
          contentContainerStyle={styles.content}
          data={resources}
          refreshing={loading}
          onRefresh={() => this.updateResources()}
          onEndReached={() => this.incrementPage()}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Nenhum recurso de tradução encontrado!
            </Text>
          )}
          keyExtractor={(item, index) =>
            `${item.resource.resource_id}_${index}`
          }
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    paddingBottom: 20,
    alignSelf: 'stretch'
  },
  emptyText: {
    marginTop: 15,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    resources: state.resource.resources,
    loading: state.resource.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResources: () => dispatch(getResources())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
