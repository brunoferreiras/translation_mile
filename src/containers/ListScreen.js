import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getResources } from '../actions/resource';
import Card from '../components/Card';
import Header from '../components/Header';
import FormSearch from '../containers/FormSearch';
import LoadModal from '../components/LoadModal';

class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      numberPartial: 5
    };
  }

  updateResources = () => {
    this.props.getResources();
  };

  componentDidMount() {
    this.props.getResources();
  }

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  getPartialResources(resources) {
    return [...resources.slice(0, this.state.page * this.state.numberPartial)];
  }

  renderItem = ({ item }) => <Card resource={item.resource} />;

  render() {
    const { loading, resources, loadMessage } = this.props;
    return (
      <View style={styles.container}>
        <LoadModal show={loading} legend={loadMessage} />
        <Header title="Translation Mile" leftIcon="menu" rightIcon="home" />
        <FlatList
          ListHeaderComponent={<FormSearch />}
          contentContainerStyle={styles.content}
          data={this.getPartialResources(resources)}
          refreshing={loading}
          onRefresh={this.updateResources}
          onEndReached={this.incrementPage}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Nenhum recurso de tradução encontrado!
            </Text>
          )}
          keyExtractor={(item, index) =>
            `${item.resource.resource_id}_${index}`
          }
          renderItem={this.renderItem}
          ListFooterComponent={<View />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1
  },
  content: {
    marginTop: 10,
    paddingBottom: 20
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
    resources: state.resource.filteredResources,
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
